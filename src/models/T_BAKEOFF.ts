import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BAKEOFF', {schema: 'dbo' } )
export class T_BAKEOFF {

    @Column('datetime', {
        nullable: true,
        name: 'BAK_DELIVERY_DAT',
        })
    public BAK_DELIVERY_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'BAK_CREATION_DAT',
        })
    public BAK_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'BAK_DESCRIPTION_C',
        })
    public BAK_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BAK_STATUS_C',
        })
    public BAK_STATUS_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'BAK_MULTIPLIER_N',
        })
    public BAK_MULTIPLIER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'BAK_TRANSFERT_DAT',
        })
    public BAK_TRANSFERT_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'BAK_SESSION_N',
        })
    public BAK_SESSION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'BAK_RECEPTION_DAT',
        })
    public BAK_RECEPTION_DAT: Date | null;

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'BAK_ID_N',
        })
    public BAK_ID_N: number;

    @Column('tinyint', {
        nullable: true,
        name: 'BAK_SEQUENCE_N',
        })
    public BAK_SEQUENCE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BAK_IDBO_N',
        })
    public BAK_IDBO_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'BAK_CREATIONUSER_C',
        })
    public BAK_CREATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'BAK_STATUS_DAT',
        })
    public BAK_STATUS_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'BAK_STATUSUSER_C',
        })
    public BAK_STATUSUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'BAK_INUSEBYUSER_C',
        })
    public BAK_INUSEBYUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'BAK_INUSEBYMACHINE_C',
        })
    public BAK_INUSEBYMACHINE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'BAK_INUSEBY_DAT',
        })
    public BAK_INUSEBY_DAT: Date | null;

}
