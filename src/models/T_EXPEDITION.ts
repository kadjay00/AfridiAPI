import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EXPEDITION', {schema: 'dbo' } )
export class T_EXPEDITION {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'EXP_EXPEDITION_N',
        })
    public EXP_EXPEDITION_N: number;

    @Column('char', {
        nullable: true,
        name: 'EXP_TYPE_C',
        })
    public EXP_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'EXP_SUPPLIERID_C',
        })
    public EXP_SUPPLIERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXP_EXPEDITION_DAT',
        })
    public EXP_EXPEDITION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'EXP_CARNUMBER_C',
        })
    public EXP_CARNUMBER_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'EXP_TOTALCOLLIS_D',
        })
    public EXP_TOTALCOLLIS_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'EXP_TOTALCOLLISDEF_D',
        })
    public EXP_TOTALCOLLISDEF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'EXP_STATUS_C',
        })
    public EXP_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EXP_STATUSMAJSTOCK_C',
        })
    public EXP_STATUSMAJSTOCK_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'EXP_POIDS_N',
        })
    public EXP_POIDS_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'EXP_POIDSDEF_N',
        })
    public EXP_POIDSDEF_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'EXP_USERID_C',
        })
    public EXP_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXP_CREATIONDATE_DAT',
        })
    public EXP_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXP_UPDATEDATE_DAT',
        })
    public EXP_UPDATEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'EXP_SUPCODE_C',
        })
    public EXP_SUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXP_SUPDATE_DAT',
        })
    public EXP_SUPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXP_TRANSMIT_DAT',
        })
    public EXP_TRANSMIT_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'EXP_COMMENT_C',
        })
    public EXP_COMMENT_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'EXP_RETOUR_N',
        })
    public EXP_RETOUR_N: number | null;

}
