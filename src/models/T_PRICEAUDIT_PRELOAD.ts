import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEAUDIT_PRELOAD', {schema: 'dbo' } )
export class T_PRICEAUDIT_PRELOAD {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'PPR_ID_N',
        })
    public PPR_ID_N: number;

    @Column('char', {
        nullable: false,
        name: 'PPR_TYPE_C',
        })
    public PPR_TYPE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'PPR_DEMAND_DAT',
        })
    public PPR_DEMAND_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PPR_USERID_C',
        })
    public PPR_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PPR_COMPUTER_C',
        })
    public PPR_COMPUTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PPR_COMMAND_C',
        })
    public PPR_COMMAND_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PPR_LINES_N',
        })
    public PPR_LINES_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PPR_START_DAT',
        })
    public PPR_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PPR_END_DAT',
        })
    public PPR_END_DAT: Date | null;

}
