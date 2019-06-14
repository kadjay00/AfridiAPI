import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_PALETTE', {schema: 'dbo' } )
export class T_RECEPTION_PALETTE {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'REP_REPRISE_N',
        })
    public REP_REPRISE_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'REP_RECEPTION_N',
        })
    public REP_RECEPTION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'REP_CREATION_DAT',
        })
    public REP_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'REP_STATUS_C',
        })
    public REP_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REP_STATUS_DAT',
        })
    public REP_STATUS_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'REP_PDT_C',
        })
    public REP_PDT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'REP_USERID_C',
        })
    public REP_USERID_C: string | null;

}
