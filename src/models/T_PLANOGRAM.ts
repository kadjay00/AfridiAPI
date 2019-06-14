import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PLANOGRAM', {schema: 'dbo' } )
export class T_PLANOGRAM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'PLA_PLAN_ID_C',
        })
    public PLA_PLAN_ID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PLA_CODE_C',
        })
    public PLA_CODE_C: string;

    @Column('char', {
        nullable: false,
        name: 'PLA_REJECT_C',
        })
    public PLA_REJECT_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PLA_LENGHT_D',
        })
    public PLA_LENGHT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PLA_SURFACE_D',
        })
    public PLA_SURFACE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PLA_VOLUME_D',
        })
    public PLA_VOLUME_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PLA_SIZE_C',
        })
    public PLA_SIZE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PLA_APPLY_DAT',
        })
    public PLA_APPLY_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PLA_START_DAT',
        })
    public PLA_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PLA_END_DAT',
        })
    public PLA_END_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PLA_REJECT_DAT',
        })
    public PLA_REJECT_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PLA_USER_C',
        })
    public PLA_USER_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'PLA_COMMENT_C',
        })
    public PLA_COMMENT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PLA_TRANSMISSION_DAT',
        })
    public PLA_TRANSMISSION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PLA_FLAG1_C',
        })
    public PLA_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PLA_FLAG2_C',
        })
    public PLA_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PLA_FLAG3_C',
        })
    public PLA_FLAG3_C: string | null;

}
